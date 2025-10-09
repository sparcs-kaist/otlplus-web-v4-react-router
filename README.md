# OTL Plus Web v4

## Getting Started

### Installation

Install pnpm if you haven't already:

```bash
npm install -g pnpm
```

Install the dependencies:

```bash
pnpm install
```

### Development

Copy file .env.example to .env and set your environment variables:

```bash
cp .env.example .env
```

Start the development server with HMR:

```bash
pnpm run dev
```

Your application will be available at `http://localhost:5173`.

### File Structure

This project follows a feature-based organization within the `app` directory.

- **`app/`**: Contains the core application code.
    - **`api/`**: Handles API requests and data fetching logic by Zod library. Each subdirectory corresponds to a
      specific API endpoint.
    - **`common/`**: Contains reusable components, interfaces, primitives, and utility functions used across the
      application.
        - `components/`: Reusable UI components (e.g., Button, Modal).
        - `enum/`: Enum definitions.
        - `interface/`: TypeScript interfaces.
        - `primitives/`: Basic building blocks for UI components.
        - `schemas/`: Zod schemas for data validation. Frequently used types are defined here.
    - **`features/`**: Contains code for specific application features (e.g., account, dictionary). Each feature has its
      own folder with its name and follows the structure below:
        - `components/`: Components that are specific to this feature.
        - `sections/`: Larger UI blocks that compose a feature's page. A complex section is organized into its own
          folder (e.g., `AccountInfoSection/`) with an `index.tsx` as its entry point. Smaller components(SubSection)
          that make up the section are placed within the same folder as `{subsection-name}.tsx`.
    - **`i18n/`**: Internationalization and localization files.
    - **`libs/`**: Third-party library configurations (e.g., axios, i18n).
    - **`routes/`**: Defines the application's routes. This project uses file-based routing. File in this directory
      corresponds to a route in the application.
    - **`styles/`**: Global styles and theme definitions.
    - **`utils/`**: Utility functions.
- **`public/`**: Static assets like images and icons.

## Building for Production

Create a production build:

```bash
pnpm run build
```
