import React from "react";

const W_SocialLinks = () => {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col space-y-3 z-50">
      <a
        href="https://github.com/jaeho9"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition"
      >
        <img
          src="/images/icons/whitegithub.svg"
          alt="GitHub"
          className="w-12 h-12"
        />
      </a>
      <a
        href="https://velog.io/@l2281/posts"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition"
      >
        <img
          src="/images/icons/whitevelog.svg"
          alt="Blog"
          className="w-12 h-12"
        />
      </a>
    </div>
  );
};

export default W_SocialLinks;
