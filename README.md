# Gmail Clone 📧

A modern, fully functional Gmail clone built with React.js and Firebase, featuring real-time email composition, display, and management capabilities.

## 🚀 Live Demo

**[View Live Application](https://gmail-clone-tan.vercel.app/)**

## ✨ Features

### Core Functionality
- **Real-time Email Management** - Compose, send, and view emails instantly
- **Responsive Design** - Optimized for desktop and mobile devices  
- **Firebase Integration** - Real-time database for email storage
- **Dynamic Email List** - View emails with timestamps and sender information
- **Email Details View** - Full email reading experience with navigation
- **Sample Data** - Pre-loaded with realistic sample emails for demonstration

### User Interface
- **Gmail-inspired Design** - Familiar and intuitive interface
- **Material-UI Components** - Professional icons and interactive elements
- **Tabbed Email Organization** - Primary, Promotions, and Social sections
- **Search Functionality** - Gmail-style search bar (UI ready)
- **Sidebar Navigation** - Quick access to Inbox, Starred, Sent, and Drafts

### Technical Features
- **React Router** - Smooth navigation between email list and individual emails
- **Form Validation** - Robust email composition with required field validation
- **Error Handling** - Graceful error management for Firebase operations
- **Optimistic Updates** - Immediate UI updates for better user experience

## 🛠️ Tech Stack

- **Frontend**: React 18, JavaScript (ES6+)
- **Styling**: Tailwind CSS
- **UI Components**: Material-UI (@mui/material, @mui/icons-material)
- **Routing**: React Router DOM
- **Backend**: Firebase Firestore
- **Form Management**: React Hook Form
- **Deployment**: Vercel

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Firebase account

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/ayu031201/Gmail-Clone.git
   cd Gmail-Clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Firebase Configuration**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Firestore Database
   - Create a `Firebase.js` file in the `src/components` directory:
   ```javascript
   import { initializeApp } from 'firebase/app';
   import { getFirestore } from 'firebase/firestore';

   const firebaseConfig = {
     // Your Firebase config
   };

   const app = initializeApp(firebaseConfig);
   export const db = getFirestore(app);
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Top navigation bar with search
│   ├── Sidebar.jsx         # Left sidebar with navigation options
│   ├── EmailList.jsx       # Main email list view
│   ├── EmailRow.jsx        # Individual email row component
│   ├── Mail.jsx            # Email detail/reading view
│   ├── SendMail.jsx        # Email composition modal
│   ├── Section.jsx         # Email category tabs
│   ├── SidebarOption.jsx   # Sidebar navigation items
│   └── Firebase.js         # Firebase configuration
├── App.jsx                 # Main application component
└── index.js               # Application entry point
```

## 🔥 Key Components

### App.jsx
- Main application container
- Manages global email state
- Handles routing between email list and individual emails
- Integrates sample data with Firebase data

### EmailList.jsx
- Displays paginated list of emails
- Implements email filtering by categories
- Handles timestamp formatting and display
- Responsive email count indicator

### SendMail.jsx
- Modal-based email composition
- Form validation with React Hook Form
- Real-time Firebase integration
- Optimistic UI updates

### Mail.jsx
- Individual email reading interface
- Email metadata display (sender, timestamp)
- Navigation controls (back, archive, delete, etc.)
- Print and window management options

## 🚀 Deployment

This project is deployed on Vercel. To deploy your own version:

1. **Fork the repository**
2. **Connect to Vercel**
   - Import your forked repository to Vercel
   - Configure environment variables for Firebase
3. **Deploy**
   - Vercel will automatically build and deploy your application

## 📱 Responsive Design

The application is fully responsive and works seamlessly across:
- **Desktop** - Full-featured experience with sidebar navigation
- **Tablet** - Optimized layout for medium screens
- **Mobile** - Touch-friendly interface with mobile-first design

## 🔮 Future Enhancements

- [ ] User Authentication & Authorization
- [ ] Email Threading/Conversations
- [ ] Attachment Support
- [ ] Advanced Search & Filtering
- [ ] Labels & Folders Management
- [ ] Dark Mode Theme
- [ ] Email Templates
- [ ] Keyboard Shortcuts
- [ ] Offline Support with Service Workers
- [ ] Push Notifications

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Ayush Kumar**
- GitHub: [@ayu031201](https://github.com/ayu031201)
- Email: ayu.kr2001@gmail.com

## 🙏 Acknowledgments

- Gmail for design inspiration
- Firebase for backend services
- Material-UI for component library
- React community for excellent documentation
- Vercel for seamless deployment

---

⭐ **If you found this project helpful, please consider giving it a star!** ⭐
