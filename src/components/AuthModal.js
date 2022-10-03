import React from "react";

export default function AuthModal(props) {
  const handleClick = () => {
    props.setShowModal(false);
  };
  return (
    <div className="auth-modal">
      <div onClick={handleClick}>ⓧ</div>
    </div>
  );
}
