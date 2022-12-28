import React from 'react'
import Sidebar from '../../frontend/components/Sidebar'

export const Layout = ({children}) => {
  return (
    <React.Fragment>
        <Navbar />
        <div className="coloumn mt-6">
            <div className="coloumn is-2">
                <Sidebar />
            </div>
        </div>
        <div className="coloumn has-background-light">
            <main>{children}</main>
        </div>
    </React.Fragment>
  );
};
