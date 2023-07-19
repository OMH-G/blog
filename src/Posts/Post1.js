import React, { useRef, useState } from 'react';
const Post1 = (props) => {
  const codeRef = useRef(null);
  const [isCopied, setIsCopied] = useState(false);
  
  const handleCopy = () => {
    const codeElement = codeRef.current;
    if (codeElement) {
      const codeText = codeElement.innerText;
      navigator.clipboard.writeText(codeText);
      setIsCopied(true);
    }
  };

  return (
    <>
    <div className="container mx-auto py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Advanced Blog Post</h1>
        <p className="text-gray-600 mb-8" >Written by John Doe | June 23, 2023</p>

        <div className="prose">
          {/* Blog post content goes here */}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula mi nec turpis pharetra, vel tristique
            nisl viverra. Proin cursus est ac libero dapibus scelerisque. Suspendisse a felis eleifend, faucibus velit eu,
            tristique enim. Fusce dignissim dui a magna congue, et elementum turpis molestie. Ut viverra purus eu ligula
            pulvinar, at eleifend arcu lacinia.
          </p>

          {/* Code snippet */}
          <div className="my-8">
            <h3 className="text-xl font-bold mb-4">Code Snippet</h3>
            <pre className="bg-gray-100 p-4 rounded-lg relative">
              <code className="language-javascript">
                {/* Your code snippet goes here */}
                const greeting = 'Hello, World!';
                console.log(greeting);
              </code>
              <button
                className={`absolute top-2 right-2 px-3 py-1 rounded-md ${
                  isCopied ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'
                }`}
                onClick={handleCopy}
              >
                {isCopied ? 'Copied!' : 'Copy'}
              </button>
            </pre>
          </div>
          <div className="my-8">
            <h3 className="text-xl font-bold mb-4">Screenshot</h3>
            <img src="https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg" alt="Screenshot" className="max-w-full rounded-lg shadow" />
          </div>
          <p>
            Vestibulum et hendrerit neque, sed pharetra libero. Suspendisse eget felis sed nulla pharetra accumsan nec ac
            mauris. Fusce ultrices mauris at lorem commodo bibendum. In euismod, enim et blandit feugiat, nunc purus
            sollicitudin mauris, ac luctus risus purus nec urna. Sed laoreet enim quis tellus cursus, sed consequat tortor
            accumsan. Quisque pellentesque justo risus, at tincidunt metus bibendum in. Curabitur quis tincidunt eros.
          </p>
          <footer className="bg-gray-200 py-4">
        <div className="container mx-auto">
          <p className="text-center text-gray-500">© 2023 My Blog. All rights reserved.</p>
        </div>
      </footer>
        </div>
      </div>
    </div>

    </>
  );
};

export default Post1;
