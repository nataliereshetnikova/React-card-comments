import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <h4>Warning</h4>
        Are you sure?
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          posted="Today at 4:45PM"
          avatar={faker.image.avatar()}
          text="Nice!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          posted="Today at 4:00PM"
          avatar={faker.image.avatar()}
          text="Wow"
        />
      </ApprovalCard>
      <CommentDetail
        author="Jane"
        posted="Today at 5:00AM"
        avatar={faker.image.avatar()}
        text="LOL"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
