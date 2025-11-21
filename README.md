# EUsuite Dashboard# React + TypeScript + Vite



Een moderne, centrale dashboard applicatie voor de EUsuite van applicaties. Het dashboard biedt toegang tot EUCloud, EUType, Profile en Settings via een clean en gebruiksvriendelijke interface.This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.



## 🚀 FeaturesCurrently, two official plugins are available:



- **SSO Integratie**: Volledig geïntegreerd met het centrale SSO-systeem- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh

- **Moderne UI**: Clean, responsive interface met Tailwind CSS- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- **React Router**: Client-side routing voor snelle navigatie

- **TypeScript**: Type-safe code voor betere ontwikkelervaring## React Compiler

- **Kubernetes Ready**: Volledige deployment configuratie

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## 🔐 SSO Configuratie

## Expanding the ESLint configuration

Het dashboard maakt gebruik van het centrale SSO-systeem:

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

- **SSO Backend**: `http://192.168.124.50:30500`

- **Login Portal**: `http://192.168.124.50:30090/login````js

- **Dashboard URL**: `http://192.168.124.50:30091`export default defineConfig([

- **Cookie naam**: `eusuite_token`  globalIgnores(['dist']),

- **Cookie domein**: `192.168.124.50`  {

    files: ['**/*.{ts,tsx}'],

### Endpoints    extends: [

      // Other configs...

- `GET /api/auth/validate` - Valideer authenticatie token

- `POST /api/auth/logout` - Uitloggen en cookie verwijderen      // Remove tseslint.configs.recommended and replace with this

      tseslint.configs.recommendedTypeChecked,

## 📦 Project Structuur      // Alternatively, use this for stricter rules

      tseslint.configs.strictTypeChecked,

```      // Optionally, add this for stylistic rules

src/      tseslint.configs.stylisticTypeChecked,

├── components/        # Herbruikbare UI componenten

│   ├── Header.tsx      // Other configs...

│   ├── Layout.tsx    ],

│   ├── DashboardCard.tsx    languageOptions: {

│   └── LoadingSpinner.tsx      parserOptions: {

├── pages/            # Route pagina's        project: ['./tsconfig.node.json', './tsconfig.app.json'],

│   ├── Dashboard.tsx        tsconfigRootDir: import.meta.dirname,

│   ├── Profile.tsx      },

│   └── Settings.tsx      // other options...

├── hooks/            # Custom React hooks    },

│   └── useAuth.ts  },

├── types/            # TypeScript type definities])

│   └── auth.ts```

├── config/           # Configuratie bestanden

│   └── constants.tsYou can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

└── main.tsx          # Application entry point

``````js

// eslint.config.js

## 🛠️ Developmentimport reactX from 'eslint-plugin-react-x'

import reactDom from 'eslint-plugin-react-dom'

### Vereisten

export default defineConfig([

- Node.js 20 of hoger  globalIgnores(['dist']),

- npm of yarn  {

    files: ['**/*.{ts,tsx}'],

### Installatie    extends: [

      // Other configs...

```bash      // Enable lint rules for React

npm install      reactX.configs['recommended-typescript'],

```      // Enable lint rules for React DOM

      reactDom.configs.recommended,

### Development Server    ],

    languageOptions: {

```bash      parserOptions: {

npm run dev        project: ['./tsconfig.node.json', './tsconfig.app.json'],

```        tsconfigRootDir: import.meta.dirname,

      },

De applicatie draait op `http://localhost:5173`      // other options...

    },

### Build  },

])

```bash```

npm run build
```

## 🐳 Docker Build & Deploy

### Docker Image Bouwen

```bash
docker build -t your-registry/eusuite-dashboard:latest .
```

### Docker Image Pushen (voor CI/CD)

```bash
docker push your-registry/eusuite-dashboard:latest
```

## ☸️ Kubernetes Deployment

### Deploy naar K3s

```bash
kubectl apply -f k8s/deployment.yaml
```

### Verifieer Deployment

```bash
# Check pods
kubectl get pods -l app=eusuite-dashboard

# Check service
kubectl get svc eusuite-dashboard

# Check logs
kubectl logs -l app=eusuite-dashboard
```

### Toegang tot Dashboard

Na deployment is het dashboard beschikbaar op:
- **URL**: `http://192.168.124.50:30091`

## 🔄 CI/CD Workflow

### Git Push naar CI/CD

1. **Commit wijzigingen**:
```bash
git add .
git commit -m "Update dashboard"
git push origin main
```

2. **CI/CD Pipeline** (automatisch):
   - Build Docker image
   - Push naar registry
   - Update Kubernetes deployment

### Update Deployment.yaml

Pas de image tag aan in `k8s/deployment.yaml`:

```yaml
image: your-registry/eusuite-dashboard:v1.0.0
```

## 🎨 Applicatie Links

- **EUCloud**: `http://192.168.124.50:30080`
- **EUType**: `http://192.168.124.50:30081`
- **Profile**: `/profile` (intern)
- **Settings**: `/settings` (intern)

## 🔧 Configuratie Aanpassen

### API Endpoints

Pas de URLs aan in `src/config/constants.ts`:

```typescript
export const API_BASE_URL = 'http://192.168.124.50:30500';
export const LOGIN_URL = 'http://192.168.124.50:30090/login';
export const EUCLOUD_URL = 'http://192.168.124.50:30080';
export const EUTYPE_URL = 'http://192.168.124.50:30081';
```

### NodePort

Om de NodePort te wijzigen, pas `k8s/deployment.yaml` aan:

```yaml
nodePort: 30091  # Wijzig naar gewenste poort
```

## 📝 Licentie

Proprietary - EUsuite Project

## 🤝 Support

Voor vragen of problemen, neem contact op met het development team.
