# American Golf Test Plan

## Application Overview

American Golf storefront coverage for homepage, search, product details, cart, and login validation.

## Test Scenarios

### 1. Core storefront flows

**Seed:** `tests/seed.spec.ts`

#### 1.1. Homepage loads and search is available

**File:** `tests/specs/american-golf-homepage-search-plan.spec.ts`

**Steps:**
  1. Open the homepage at https://www.americangolf.co.uk/
    - expect: The page loads successfully and the URL contains americangolf.co.uk.
    - expect: The homepage content renders and the search box is visible.
  2. Confirm the main landing sections are visible
    - expect: Hero or category sections are visible.
    - expect: The page is not blank or stuck in a loading state.
  3. Enter a product keyword and evaluate the immediate search behavior
    - expect: The search accepts text input.
    - expect: Relevant suggestions/results appear if available.
