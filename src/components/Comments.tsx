import React, { useState } from 'react';
import { Comment, mockComments } from '../data/mockData';
import { ThumbsUp, ThumbsDown, MessageCircle, MoreVertical } from 'lucide-react';

interface CommentItemProps {
  comment: Comment;
  isReply?: boolean;
}

const CommentItem: React.FC<CommentItemProps> = ({ comment, isReply = false }) => {
  const [liked, setLiked] = useState(false);
  const [showReplies, setShowReplies] = useState(false);

  return (
    <div className={`${isReply ? 'ml-12' : ''}`}>
      <div className="flex space-x-3">
        <img
          src={comment.avatar}
          alt={`${comment.author} avatar`}
          className="w-8 h-8 rounded-full object-cover flex-shrink-0 mt-1"
        />
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 mb-1">
            <h4 className="font-medium text-sm text-gray-900">{comment.author}</h4>
            <span className="text-xs text-gray-500">{comment.timestamp}</span>
          </div>
          
          <p className="text-sm text-gray-700 mb-2 leading-relaxed">
            {comment.content}
          </p>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setLiked(!liked)}
              className={`flex items-center space-x-1 text-xs transition-colors duration-200 ${
                liked ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <ThumbsUp className="w-4 h-4" />
              <span>{comment.likes + (liked ? 1 : 0)}</span>
            </button>
            
            <button className="flex items-center space-x-1 text-xs text-gray-600 hover:text-gray-900 transition-colors duration-200">
              <ThumbsDown className="w-4 h-4" />
            </button>
            
            {!isReply && (
              <button className="text-xs text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200">
                Reply
              </button>
            )}
            
            <button className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
              <MoreVertical className="w-4 h-4" />
            </button>
          </div>
          
          {comment.replies && comment.replies.length > 0 && (
            <div className="mt-3">
              <button
                onClick={() => setShowReplies(!showReplies)}
                className="flex items-center space-x-2 text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
              >
                <MessageCircle className="w-4 h-4" />
                <span>
                  {showReplies ? 'Hide' : 'Show'} {comment.replies.length} repl{comment.replies.length === 1 ? 'y' : 'ies'}
                </span>
              </button>
              
              {showReplies && (
                <div className="mt-3 space-y-4">
                  {comment.replies.map((reply) => (
                    <CommentItem key={reply.id} comment={reply} isReply />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

interface CommentsProps {
  videoId: string;
}

export const Comments: React.FC<CommentsProps> = ({ videoId }) => {
  const [newComment, setNewComment] = useState('');
  const [sortBy, setSortBy] = useState<'top' | 'newest'>('top');

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      // Handle comment submission
      console.log('New comment:', newComment);
      setNewComment('');
    }
  };

  return (
    <div className="space-y-6">
      {/* Comments Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h2 className="text-xl font-semibold text-gray-900">
            {mockComments.length.toLocaleString()} Comments
          </h2>
          
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Sort by</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'top' | 'newest')}
              className="text-sm font-medium text-gray-900 bg-transparent border-none cursor-pointer focus:outline-none"
            >
              <option value="top">Top comments</option>
              <option value="newest">Newest first</option>
            </select>
          </div>
        </div>
      </div>

      {/* Add Comment */}
      <form onSubmit={handleSubmitComment} className="space-y-4">
        <div className="flex space-x-3">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white text-sm font-medium">U</span>
          </div>
          
          <div className="flex-1">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              className="w-full p-0 text-sm border-0 border-b-2 border-gray-200 focus:border-blue-500 resize-none bg-transparent focus:outline-none transition-colors duration-200"
              rows={1}
              style={{ minHeight: '24px' }}
              onInput={(e) => {
                const target = e.target as HTMLTextAreaElement;
                target.style.height = 'auto';
                target.style.height = `${target.scrollHeight}px`;
              }}
            />
            
            {newComment.trim() && (
              <div className="flex items-center justify-end space-x-2 mt-2">
                <button
                  type="button"
                  onClick={() => setNewComment('')}
                  className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white text-sm rounded-full hover:bg-blue-700 transition-colors duration-200"
                >
                  Comment
                </button>
              </div>
            )}
          </div>
        </div>
      </form>

      {/* Comments List */}
      <div className="space-y-6">
        {mockComments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};