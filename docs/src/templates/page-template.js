import React from 'react';
import { graphql } from 'gatsby';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Template({ data }) {
  const { page, propsPage, statePage, methodsPage } = data;
  const { frontmatter: pageFrontmatter, html: pageHtml } = page;
  const { html: propsHtml } = propsPage;
  const { html: stateHtml } = statePage;
  const { html: methodsHtml } = methodsPage;

  return (
    <div className="container px2 sm-px3">
      <Header title={pageFrontmatter.title} />

      <article dangerouslySetInnerHTML={{ __html: pageHtml }} />

      {pageFrontmatter.innerProps && (
        <details>
          <summary>innerProps</summary>
          <div dangerouslySetInnerHTML={{ __html: propsHtml }} />
        </details>
      )}

      {pageFrontmatter.innerState && (
        <details>
          <summary>innerState</summary>
          <div dangerouslySetInnerHTML={{ __html: stateHtml }} />
        </details>
      )}

      {pageFrontmatter.innerMethods && (
        <details>
          <summary>innerMethods</summary>
          <div dangerouslySetInnerHTML={{ __html: methodsHtml }} />
        </details>
      )}

      <br />

      {pageFrontmatter.demo && (
        <iframe
          title={pageFrontmatter.title}
          src={`${pageFrontmatter.demo}?autoresize=1&fontsize=13&hidenavigation=1`}
          style={{
            width: '100%',
            height: '500px',
            border: 0,
            borderRadius: '4px',
            overflow: 'hidden'
          }}
          sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
        />
      )}
      <Footer />
    </div>
  );
}

export const pageQuery = graphql`
  query($path: String) {
    page: markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        demo
        innerProps
        innerState
        innerMethods
      }
    }
    methodsPage: markdownRemark(frontmatter: { path: { eq: "/methods" } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
    propsPage: markdownRemark(frontmatter: { path: { eq: "/props" } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
    statePage: markdownRemark(frontmatter: { path: { eq: "/state" } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;