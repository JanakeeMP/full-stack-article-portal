# InsightHub: Full-Stack Article Portal

A modern full-stack web application for reading, and discussing articles. Built with React (Vite) frontend and Node.js/Express backend with Firebase authentication, MongoDB for data storage, and deployed on Google Cloud App Engine.

## Features

- **Browse & Read Articles** — Explore a curated collection of articles with rich content
- **User Authentication** — Secure login and account creation with Firebase
- **Upvote Articles** — Like and upvote your favorite articles
- **Comments & Discussions** — Add and read comments from the community
- **Responsive Design** — Mobile-friendly UI built with Bootstrap
- **RESTful API** — Clean backend API for all operations
- **Cloud Deployment** — Fully deployed on Google Cloud App Engine

## Project Structure

```
full-stack-article-portal/
├── backend/
│   ├── src/
│   │   └── server.js                 # Express server with API routes
│   ├── app.yaml                      # Google Cloud App Engine config
│   ├── prod-env.yaml                 # Production environment variables
│   ├── credentials.json              # Firebase admin credentials
│   ├── package.json
│   └── .gcloudignore
├── frontend/
│   ├── src/
│   │   ├── App.jsx                   # Main React app with routing
│   │   ├── main.jsx                  # Entry point
│   │   ├── article-content.js        # Article data
│   │   ├── useUser.js                # Firebase auth hook
│   │   ├── components/
│   │   │   ├── ArticleList.jsx
│   │   │   ├── AddCommentForm.jsx
│   │   │   ├── CommentsList.jsx
│   │   │   ├── Layout.jsx            # Main layout wrapper
│   │   │   └── NavBar.jsx
│   │   ├── pages/
│   │   │   ├── AboutPage.jsx
│   │   │   ├── ArticleListPage.jsx
│   │   │   ├── ArticlePage.jsx       # Article detail with loader
│   │   │   ├── CareersPage.jsx
│   │   │   ├── CreateAccountPage.jsx
│   │   │   ├── HomePage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   └── NotFoundPage.jsx
│   ├── dist/                         # Built frontend (served by backend)
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## Getting Started (Local Development)

### Prerequisites
- Node.js (v18+ recommended, tested with v22)
- MongoDB Atlas account (or local MongoDB instance)
- Firebase project (for authentication)
- Google Cloud project (for deployment)

### 1. Clone the repository
```bash
git clone https://github.com/JanakeeMP/full-stack-article-portal.git
cd full-stack-article-portal
```

### 2. Install dependencies

**Frontend:**
```bash
cd frontend
npm install
```

**Backend:**
```bash
cd ../backend
npm install
```

### 3. Configure Firebase & MongoDB

**Backend setup:**
1. Create a Firebase project and generate a service account key
2. Save the key as `backend/credentials.json`
3. Create a `backend/.env` file with:
   ```
   MONGODB_USERNAME=your_mongodb_username
   MONGODB_PASSWORD=your_mongodb_password
   PORT=8000
   ```

### 4. Build the frontend
```bash
cd frontend
npm run build
cp -r dist ../backend/
```

### 5. Start the backend server
```bash
cd ../backend
npm start
```
Server runs on http://localhost:8000

### 6. Verify it's working
Open http://localhost:8000 in your browser

## Development Mode (Frontend Hot Reload)

If you want to develop with frontend hot reload:

**Terminal 1 - Frontend dev server:**
```bash
cd frontend
npm run dev
```
Opens at http://localhost:5173

**Terminal 2 - Backend:**
```bash
cd backend
npm start
```

Note: Frontend dev server needs a proxy to backend. Update `frontend/vite.config.js` if needed.

## API Endpoints

All endpoints require the backend to be running.

### Public Endpoints
- `GET /api/articles/:name` — Get article details (upvotes, comments)

### Authenticated Endpoints (require Firebase auth token)
- `POST /api/articles/:name/upvote` — Upvote an article
  - Header: `authtoken: <firebase-id-token>`
  - Returns: Updated article with upvote count

- `POST /api/articles/:name/comments` — Add a comment
  - Header: `authtoken: <firebase-id-token>`
  - Body: `{ postedBy: string, text: string }`
  - Returns: Updated article with new comment


## Environment Variables

### Backend (.env)
```
MONGODB_USERNAME=your_mongodb_atlas_username
MONGODB_PASSWORD=your_mongodb_atlas_password
PORT=8000
```

### Production (backend/prod-env.yaml)
```yaml
env_variables:
  MONGODB_USERNAME: "your_production_username"
  MONGODB_PASSWORD: "your_production_password"
```

## Technologies Used

### Frontend
- **React 18** — UI framework
- **Vite** — Build tool and dev server
- **React Router v6** — Client-side routing with loaders
- **Bootstrap 5** — Responsive CSS framework
- **Firebase Auth** — User authentication

### Backend
- **Node.js (v22)** — Runtime
- **Express 5** — Web framework
- **MongoDB 7** — NoSQL database
- **Firebase Admin SDK** — Authentication verification
- **dotenv** — Environment variable management

### Deployment
- **Google Cloud App Engine** — Serverless hosting
- **Cloud Build** — Automated deployment pipeline
- **MongoDB Atlas** — Managed MongoDB database

## Deployment to Google Cloud

### Prerequisites
- Google Cloud project with billing enabled
- `gcloud` CLI installed and authenticated
- App Engine API enabled on your GCP project

### 1. Initialize App Engine (one-time)
```bash
gcloud app create --project=YOUR_PROJECT_ID --region=australia-southeast1
```

### 2. Build frontend
```bash
cd frontend
npm run build
cp -r dist ../backend/
cd ../backend
```

### 3. Deploy to App Engine
```bash
gcloud app deploy app.yaml --project=YOUR_PROJECT_ID
```

### 4. Monitor deployment
```bash
gcloud app describe --project=YOUR_PROJECT_ID
gcloud app logs read --project=YOUR_PROJECT_ID --limit=50
```

### Configuration (app.yaml)
```yaml
includes:
  - prod-env.yaml
runtime: nodejs22
```

### Rollback a deployment
```bash
gcloud app versions list --project=YOUR_PROJECT_ID
gcloud app versions delete VERSION_ID --project=YOUR_PROJECT_ID
```

## Development Scripts

### Frontend
```bash
npm run dev        # Start Vite dev server (http://localhost:5173)
npm run build      # Build for production
npm run preview    # Preview production build locally
```

### Backend
```bash
npm start          # Start server (http://localhost:8000)
npm run dev        # Start with nodemon (auto-restart on changes)
```

## Common Issues & Troubleshooting

### 404 Errors
- Ensure backend is running and serving the frontend's `dist/` folder
- Check that React Router loaders are attached to routes
- Verify the frontend build exists in `backend/dist/`

### "Right side of assignment cannot be destructured"
- This error occurs when a React Router loader returns undefined
- Ensure the loader function in ArticlePage properly fetches and returns data
- Check that the route has the loader attached: `{ path: '/articles/:name', element: <ArticlePage />, loader: articleLoader }`

### MongoDB Connection Errors (SSL/TLS)
- Verify MongoDB Atlas connection string is correct
- Check IP whitelist in MongoDB Atlas (allow all IPs: 0.0.0.0/0 for development)
- Ensure credentials are correctly set in environment variables

### Firebase Authentication Issues
- Verify `credentials.json` is in the backend root directory
- Check Firebase project is set up correctly in the frontend
- Ensure Firebase rules allow your users to authenticate

### App Engine Deployment Fails
- Check Cloud Build logs: `gcloud builds log BUILD_ID`
- Verify `app.yaml` is in the backend directory
- Ensure `prod-env.yaml` exists with valid environment variables (use spaces, not tabs)
- Run `npm install && npm start` locally to verify it works

## Known Limitations

- Articles are fetched from `article-content.js` (static data). For a real app, consider moving to database-driven articles.
- Comments and upvotes are stored in MongoDB but frontend doesn't persist to localStorage, so data resets on refresh without a proper backend sync.

## Future Enhancements

- [ ] Add article search and filtering
- [ ] Implement user profiles and follow functionality
- [ ] Add article creation/editing for authenticated users
- [ ] Add analytics with Google Analytics
- [ ] Implement caching with Redis
- [ ] Add rate limiting and CORS configuration

## Performance Tips

- Backend: Add database indexing on frequently queried fields (e.g., article `name`, `comments`)
- Deployment: Enable Cloud CDN on App Engine for faster static content delivery

## Security Considerations

⚠️ **Important:** The `env`, `credentials.json` and `prod-env.yaml` files contain sensitive information:
- Never commit secrets to version control
- Use `.gitignore` to exclude: `credentials.json`, `.env`, `prod-env.yaml`
- For production, use Google Cloud Secret Manager instead of hardcoded values
- Rotate credentials periodically

Recommended: Use `gcloud secrets` to manage sensitive data:
```bash
gcloud secrets create mongodb-password --data-file=-
gcloud secrets versions access latest --secret=mongodb-password
```
## Live Demo

Visit the live application: https://full-stack-react-e9657.ts.r.appspot.com

## License

MIT License — Feel free to use this project for educational and commercial purposes.

## Author

**JanakeeMP** — [GitHub](https://github.com/JanakeeMP)

## Support

For issues, questions, or suggestions, please open a GitHub issue or contact the author.

