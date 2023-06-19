import { NextApiRequest, NextApiResponse } from 'next';
import serverAuth from '@/../libs/serverAuth';

const HomePage = () => {

  console.log("Homepage")
  
  const isLoggedIn = async (req: NextApiRequest, res: NextApiResponse) => {
    const { currentUser } = await serverAuth(req, res);
    console.log("user", currentUser)
    return currentUser ? true : false;
  }
  

  console.log("isLoggedIn", isLoggedIn)

  return (
    <div>
      <h1>Welcome to My Website</h1>
      {isLoggedIn ? (
        <div>
          {/* Display dashboard content here */}
        </div>
      ) : (
        <div>
          <p>Please log in to access the dashboard.</p>
          {/* Your login form */}
        </div>
      )}
    </div>
  );
};

export default HomePage;
