import React from 'react';
import Ob from './hoc/Ob';
import Navbar from './Components/Navbar/Navbar';
import Posts from './Containers/Posts/Posts';
import Sidebar from './Containers/Sidebar/Sidebar';

const app = () => {
  return (
    <Ob>
      <Navbar />

      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-8">
            <Posts />
          </div>

          <Sidebar />
        </div>
      </div>

      <footer className="mt-5 mb-3">
        <p className="text-center text-muted small">&copy; Copyright { new Date().getFullYear() }. All rights reserved.</p>
      </footer>
    </Ob>
  );
}

export default app;
