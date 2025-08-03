# Implementation Strategy: SyntaxThreadsCo Frontend MVP

This document outlines the technical implementation plan for the SyntaxThreadsCo frontend MVP.

## Phase 1: Simplification and Adaptation

**Objective:** Strip out e-commerce functionality and adapt the UI to a showcase model.

**Lead Agent:** Gemini CLI (for initial setup and route cleaning)

**Tasks:**

1.  **Create Static Product Data:**
    *   Create `src/data/products.ts`.
    *   Define a `Product` interface in that file.
    *   Populate the file with data for the 10 T-shirts (name, description, price, images, Etsy URL).
    *   **Agent:** ChatGPT can help write the product descriptions.

2.  **Simplify Routing:**
    *   In `src/App.tsx`, remove the routes for `/cart`, `/checkout`, `/orders`, `/login`, and `/register`.
    *   **Agent:** Gemini CLI

3.  **Update Navigation:**
    *   In `src/components/NavLinks.tsx`, remove the links to the deactivated pages.
    *   In `src/components/Header.tsx`, remove the `CartButton` component.
    *   **Agent:** Claude Code

4.  **Simplify Redux Store:**
    *   In `src/store.ts`, remove `cartSlice` and `userSlice` from the `reducer` configuration.
    *   **Agent:** Claude Code

## Phase 2: UI and Content Integration

**Objective:** Connect the static data to the UI components and align the aesthetic with the brand.

**Lead Agent:** Claude Code

**Tasks:**

1.  **Adapt Product Components:**
    *   Modify `src/pages/Products.tsx` and `src/components/ProductsGrid.tsx` to source data from `src/data/products.ts` instead of an API.
    *   Modify `src/pages/SingleProduct.tsx` to do the same.
    *   **Agent:** Claude Code

2.  **Implement "Buy on Etsy" Button:**
    *   In `src/pages/SingleProduct.tsx`, change the "Add to Cart" button to a "Buy on Etsy" button that links to the `etsyUrl` from the product data.
    *   Do the same for any "quick buy" buttons on the product grid.
    *   **Agent:** Claude Code

3.  **Style and Polish:**
    *   Apply the minimalist, developer-focused aesthetic using TailwindCSS.
    *   Ensure the site is responsive.
    *   **Agent:** Claude Code / ChatGPT for UX feedback.

## Multi-Agent Workflow

*   **Gemini CLI:** Will handle the initial project setup, simplification, and deployment.
*   **Claude Code:** Will perform the bulk of the component-level implementation and styling.
*   **ChatGPT:** Will assist with content generation (product descriptions) and provide UX feedback.

We will use the `DEV_LOG.md` to track progress and coordinate handoffs.
