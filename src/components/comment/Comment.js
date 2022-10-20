import {Link} from "react-router-dom";

const Comment = ({comment}) => {
  return (
      <div>
          <Link to={comment.postId.toString()}>
              <h3>id: {comment.id} title: {comment.name}</h3>
          </Link>
      </div>
  )
};

export {Comment};
