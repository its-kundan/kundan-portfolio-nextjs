// src/pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">  
        <Head>
          {/* Place any meta tags or links for CSS here */}
        </Head>
        <body> 
          <Main />  
          <NextScript />  
        </body>
      </Html>
    );
  }
}

export default MyDocument;
