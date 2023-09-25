import React, { useState } from 'react';

import BlogSidebar from './BlogPageSidebar';


function BlogPage() {
  const [activeTab, setActiveTab] = useState('tab1'); // Initialize the active tab

  return (
    <div>
      <BlogSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

     
    </div>
  );
}

export default BlogPage;
