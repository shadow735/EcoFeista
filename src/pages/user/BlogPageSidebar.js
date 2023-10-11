import React, { useState } from 'react';
import '../../css/BlogPage.css';
import { ChildComponent1, ChildComponent2, ChildComponent3, ChildComponent4, ChildComponent5, ChildComponent6,ChildComponent7 } from '../../components/user/Blog'; // Import the child components

const BlogSidebar = () => {
  const [currentTab, setCurrentTab] = useState('tab1');

  const handleLinkClick = (tab) => {
    setCurrentTab(tab);
    // Handle the click event as needed
    console.log(`Clicked on tab ${tab}`);
  };

  return (
    <div className="StyledDashboard">
      <div className="SideNav">
        <div
          className={currentTab === 'tab1' ? 'link-active' : 'link-inactive'}
          onClick={() => handleLinkClick('tab1')}
        >
         Diwali
        </div>
        <div
          className={currentTab === 'tab2' ? 'link-active' : 'link-inactive'}
          onClick={() => handleLinkClick('tab2')}
        >
         Dussehra
        </div>
        {/* Add more links for other tabs */}

        <div
          className={currentTab === 'tab3' ? 'link-active' : 'link-inactive'}
          onClick={() => handleLinkClick('tab3')}
        >
          Ganesh Chaturthi
        </div>

        <div
          className={currentTab === 'tab4' ? 'link-active' : 'link-inactive'}
          onClick={() => handleLinkClick('tab4')}
        >
         Janmashtami
        </div>

        <div
          className={currentTab === 'tab5' ? 'link-active' : 'link-inactive'}
          onClick={() => handleLinkClick('tab5')}
        >
          Gudi Padwa
        </div>

        <div
          className={currentTab === 'tab6' ? 'link-active' : 'link-inactive'}
          onClick={() => handleLinkClick('tab6')}
        >
          Maha Shivratri
        </div>

        <div
          className={currentTab === 'tab5' ? 'link-active' : 'link-inactive'}
          onClick={() => handleLinkClick('tab5')}
        >
          Holi
        </div>

      </div>
      {/* Render the child components based on the selected tab */}
      {currentTab === 'tab1' && <ChildComponent1 />}
      {currentTab === 'tab2' && <ChildComponent2 />}
      {currentTab === 'tab3' && <ChildComponent3 />}
      {currentTab === 'tab4' && <ChildComponent4 />}
      {currentTab === 'tab5' && <ChildComponent5 />}
      {currentTab === 'tab6' && <ChildComponent6 />}
      {currentTab === 'tab7' && <ChildComponent7 />}
      {/* Add more conditionally rendered components for other tabs */}
    </div>
  );
};

export default BlogSidebar;
