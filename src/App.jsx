import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Mail from './components/Mail'
import EmailList from './components/EmailList'
import { db } from './components/Firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

function App() {
  const [emails, setEmails] = useState([]);

  const sampleEmails = [
    {
      id: 'sample0',
      to: 'ayu.kr2001@gmail.com',
      subject: 'Click Me for more Info!',
      message: 'Hi there! You can compose an Email and see it appear on the email list in real-time!',
      timestamp: { toDate: () => new Date(Date.now() - 2 * 60 * 60 * 1000) } 
    },
    {
      id: 'sample1',
      to: 'notifications@github.com',
      subject: 'Your GitHub repository has new activity',
      message: 'Hi there! We wanted to let you know that your repository "gmail-clone" has received 2 new stars and 1 fork. Keep up the great work! Your code is helping other developers learn and build amazing projects.',
      timestamp: { toDate: () => new Date(Date.now() - 2 * 60 * 60 * 1000) } 
    },
    {
      id: 'sample2', 
      to: 'team@vercel.com',
      subject: 'Your deployment was successful! 🚀',
      message: 'Congratulations! Your application has been successfully deployed to Vercel. Your site is now live and accessible worldwide. You can view your deployment at https://your-app.vercel.app. Performance metrics show 98% uptime and fast loading times.',
      timestamp: { toDate: () => new Date(Date.now() - 5 * 60 * 60 * 1000) } 
    },
    {
      id: 'sample3',
      to: 'support@openai.com', 
      subject: 'Welcome to ChatGPT Plus!',
      message: 'Thank you for subscribing to ChatGPT Plus! You now have access to GPT-4, faster response times, and priority access during peak hours. We\'re excited to help you be more productive with AI assistance.',
      timestamp: { toDate: () => new Date(Date.now() - 1 * 24 * 60 * 60 * 1000) }
    },
    {
      id: 'sample4',
      to: 'noreply@linkedin.com',
      subject: 'You have 3 new connection requests',
      message: 'Your network is growing! You have new connection requests from software developers and tech professionals. Expanding your network can lead to new opportunities, collaborations, and career growth. Check out who wants to connect with you.',
      timestamp: { toDate: () => new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) }
    },
    {
      id: 'sample5',
      to: 'newsletter@medium.com',
      subject: 'Top React articles this week',
      message: 'Discover the most popular React articles from this week! From advanced hooks patterns to performance optimization tips, stay updated with the latest trends in React development. This week features articles on React 18, Suspense, and modern state management.',
      timestamp: { toDate: () => new Date(Date.now() - 3 * 24 * 60 * 60 * 1000) }
    },
    {
      id: 'sample6',
      to: 'security@google.com',
      subject: 'Security alert: New sign-in from Mumbai',
      message: 'We detected a new sign-in to your Google Account from Mumbai, Maharashtra, India. If this was you, you can ignore this message. If not, please secure your account immediately by changing your password and enabling 2-factor authentication.',
      timestamp: { toDate: () => new Date(Date.now() - 4 * 24 * 60 * 60 * 1000) } 
    }
  ];

  useEffect(() => {

    setEmails(sampleEmails);
    
    const fetchEmails = async () => {
      try {
        const q = query(collection(db, 'emails'), orderBy('timestamp', 'desc'));
        const querySnapshot = await getDocs(q);
        const firebaseEmails = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        const allEmails = [...firebaseEmails, ...sampleEmails];
        setEmails(allEmails);
      } catch (error) {
        console.error('Error fetching emails:', error);

      }
    };

    fetchEmails();
  }, []);

  const addNewEmail = (newEmail) => {
    setEmails(prevEmails => [newEmail, ...prevEmails]);
  };

  return (
    <Router>
      <div className='bg-white w-full min-h-screen'>
        <Header/>

        <div className="body flex">
          <Sidebar addNewEmail={addNewEmail}/>

          <Routes>
            <Route path="/mail" element={<Mail/>}/>              
            <Route path="/" element={<EmailList emails={emails} />}/>
          </Routes>

        </div>
      </div>
    </Router>
  )
}

export default App