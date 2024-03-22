import React from 'react';
import createDOMPurify from 'dompurify';

const SafeHTML = ({ html }) => (
    <span className='render_html_safely' dangerouslySetInnerHTML={{ __html: createDOMPurify.sanitize(html) }} />
);

export default SafeHTML;
