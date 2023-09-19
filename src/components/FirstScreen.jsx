import React from "react";

const FirstScreen = () => {
  return (
    <div>
      <div className="bg-blue-900 w-full h-20 flex items-center">
        <p className="text-2xl ml-5"> ❌ </p>
        <p className="text-2xl ml-20 text-white"> HOME DESIGN </p>
      </div>
      <div className="cards">
        <div className="card flex b">
          <img src="" alt="img" />
          <p className="text-xl ml-20">nuevo proyecto</p>
        </div>
        <div className="card flex b">
          <img src="" alt="img" />
          <p className="text-xl ml-20">nuevo proyecto</p>
        </div>
        <div className="card flex b">
          <img src="" alt="img" />
          <p className="text-xl ml-20">nuevo proyecto</p>
        </div>
      </div>
    </div>
  );
};

export default FirstScreen;
