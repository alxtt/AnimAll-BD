import React from 'react';

const PostItem = (props) => {
    return (
        <div className="post">
            <div className="post__content">
                <strong>1. Javascript</strong>
                <div>
                    Text
                </div>
            </div>
            <div className="post_buttons">
                <button>Удалить</button>
            </div>
        </div>
    );
};

export default PostItem;
