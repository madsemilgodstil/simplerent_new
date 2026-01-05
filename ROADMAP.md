# SimpleRent - Komplet Roadmap

> Film equipment rental platform - Funktionalitetsoversigt til ny implementation

---

## 📋 Indholdsfortegnelse

1. [Tech Stack](#tech-stack)
2. [Design System](#design-system)
3. [Sidestruktur](#sidestruktur)
4. [Komponenter](#komponenter)
5. [State Management](#state-management)
6. [Brugerflows](#brugerflows)
7. [Implementeringsrækkefølge](#implementeringsrækkefølge)

---

## 🛠 Tech Stack

| Kategori           | Teknologi                 |
| ------------------ | ------------------------- |
| Framework          | Next.js 16 (App Router)   |
| Styling            | Tailwind CSS v4           |
| State Management   | Zustand                   |
| Icons              | Lucide React, React Icons |
| Fonts              | Geist Sans, Geist Mono    |
| Image Optimization | Next.js Image             |

---

## 🎨 Design System

### Farver

```
Primary:     #D4ED31 (lime)
Black:       #0a0a0a
White:       #FFFFFF
Gray:        #DBDDE1
Light Gray:  #F7F7F7
Dark Grey:   #ACACAC
Red:         #FF0000
Green:       #008709
```

### Typografi

| Klasse | Størrelse | Vægt          |
| ------ | --------- | ------------- |
| h1     | 44px      | Bold (700)    |
| h2     | 30px      | Bold (700)    |
| h3     | 22px      | Bold (700)    |
| h4     | 18px      | Bold (700)    |
| h5     | 16px      | Bold (700)    |
| h6     | 14px      | Bold (700)    |
| p      | 16px      | Regular (400) |

### Font Family

- **Primary**: Geist Sans
- **Mono**: Geist Mono
- **Alternative**: Helvetica Neue

---

## 📄 Sidestruktur

### Offentlige Sider

| Side                   | Route           | Beskrivelse                                        |
| ---------------------- | --------------- | -------------------------------------------------- |
| **Forside**            | `/`             | Hero, Popular Kits, Featured Equipment, Categories |
| **Produkter**          | `/products`     | Produktliste med filtrering, sortering, pagination |
| **Enkelt Produkt**     | `/product/[id]` | Produktdetaljer, billeder, priser, booking         |
| **Kit Side**           | `/kits`         | Oversigt over alle udlejningskits                  |
| **Enkelt Kit**         | `/kit/[id]`     | Kit detaljer og indhold                            |
| **How It Works**       | `/how-it-works` | FAQ/Accordion med vejledning                       |
| **Learn**              | `/learn`        | Artikler og guides                                 |
| **Articles**           | `/articles`     | Blog/artikel oversigt                              |
| **About Us**           | `/about`        | Om virksomheden                                    |
| **Contact**            | `/contact`      | Kontaktformular                                    |
| **Terms & Conditions** | `/terms`        | Vilkår og betingelser                              |
| **Privacy Policy**     | `/privacy`      | Privatlivspolitik                                  |
| **Cookie Policy**      | `/cookies`      | Cookie politik                                     |

### Bruger Sider (Auth Required)

| Side               | Route         | Beskrivelse           |
| ------------------ | ------------- | --------------------- |
| **Login**          | `/login`      | Brugerlogin           |
| **Sign Up**        | `/signup`     | Opret bruger          |
| **User Dashboard** | `/account`    | Brugerens konto       |
| **Projects**       | `/projects`   | Projektadministration |
| **Checkout**       | `/checkout`   | Betalingsflow         |
| **Stay Updated**   | `/newsletter` | Nyhedsbrev tilmelding |

---

## 🧩 Komponenter

### Layout Komponenter

#### Navigation

- **Placering**: Sticky top
- **Elementer**:
  - Logo (centreret)
  - Desktop nav links (Home, How it Works, Learn)
  - Kategori-row med dropdown submenus
  - Search bar (expandable)
  - Language selector (EN, DA, ES)
  - Toolbox toggle (kalender, bruger, projekter)
  - Mobile burger menu
- **Funktioner**:
  - Scroll hide/show på kategori-row
  - Active state på nuværende side
  - Responsive mobile menu med kategorier

#### Footer

- **Sektioner**:
  - Contact (adresse, social links, kontakt knap)
  - Booking links
  - More links (legal pages)
  - Location (Google Maps embed, CPH Airport afstand)
- **Social Links**: Instagram, Facebook, X (Twitter)

#### Cart (Floating)

- **Placering**: Fixed bottom-right
- **Funktioner**:
  - Toggle åben/lukket
  - Vis antal items (badge)
  - Item liste med quantity controls
  - Subtotal beregning
  - Proceed to Checkout knap
  - Clear all funktion
  - Animation ved tilføjelse

---

### Forside Komponenter

#### Hero

- **Elementer**:
  - Fullscreen baggrundsbillede (brightness overlay)
  - Tagline: "Keeping film rental Simple."
  - Expandable search bar
  - Feature cards (4 stk):
    - Cashback for returning customers
    - Build in tools for planning
    - 24/7 instant booking
    - Only 11 min from CPH Airport

#### Popular Kits

- **Layout**: 3-kolonne grid (1 på mobil)
- **Funktioner**:
  - Kit cards med billede, titel, beskrivelse
  - "Rent Now" knap
  - "See All Kits" link (mobil only)

#### Featured Equipment

- **Layout**: 4-kolonne grid (responsiv)
- **Elementer**:
  - Gradient baggrund (darkgrey → black)
  - Decorative blur circles
  - Equipment cards med:
    - Billede med gradient overlay
    - Pris badge
    - Folder icon (add to project)
    - Titel, beskrivelse
    - "Rent Now" knap

#### Category Section

- **Layout**: 5x2 grid (2 kolonner på mobil)
- **Kategorier**:
  - Cameras, Lenses, Lighting, Audio, Tripods
  - Drones, Gimbals, Batteries, Monitors, Accessories

---

### Produkt Komponenter

#### Filter (Sidebar)

- **Sticky**: Top-20
- **Sektioner**:
  - **Categories** (expandable):
    - Kits
    - Cameras & Accessories
    - Audio
    - Lighting, SFX & Stands
    - Live Production
    - Monitors & Recorders
    - Grips & Gadgets
    - Cables & Adapters
    - Sales items
  - **Price Range**: From/To inputs
  - **Status**: In Stock checkbox
- **Funktioner**:
  - Multi-level expand/collapse
  - Checkboxes for selection
  - Show More/Less toggle

#### Product Card

- **Elementer**:
  - Billede med hover zoom
  - Titel
  - Beskrivelse
  - Pris
  - "Reserve" knap
- **Funktioner**:
  - Hover scale effect
  - Link til product detail

#### Single Product View

- **Layout**: 2-kolonne (billede | info)
- **Billede sektion**:
  - Hovedbillede med prev/next navigation
  - Thumbnail gallery (4 billeder)
  - Lightbox on click
- **Info sektion**:
  - Titel
  - Priser (1 dag, 2 dage, 3 dage)
  - Pris for valgt periode
  - Date picker (from/to)
  - "Reserver" knap
- **Ekstra sektioner**:
  - Specifikationer
  - Related products grid

---

### Kit Komponenter

#### Kit Card

- **Layout**: Horisontal (billede venstre, tekst højre)
- **Elementer**:
  - Billede (50% bredde)
  - Titel, beskrivelse
  - "Rent Now" knap
  - Folder icon (top-right)

#### Kit Component (Detail)

- **Elementer**:
  - Kit header med titel
  - Inkluderet udstyr liste
  - Samlet pris
  - Booking mulighed

---

### Checkout Komponenter

#### Progress Indicator

- 3 trin: Cart → Checkout → Confirmation
- Visuelt progress bar

#### Checkout Form

- **Step 1: Contact Information**

  - Email
  - Phone
  - Newsletter checkbox

- **Step 2: Billing Address**

  - First/Last name
  - Company (optional)
  - VAT number (vises hvis company udfyldt)
  - Address
  - Zip/City
  - Country dropdown

- **Step 3: Shipping Method**

  - Standard (3-5 dage) - 39 DKK
  - Express (1-2 dage) - 79 DKK
  - Store Pickup - FREE

- **Step 4: Payment Method**

  - Credit Card (med card inputs)
  - PayPal
  - Bank Transfer

- **Additional**
  - Order notes textarea
  - Terms acceptance checkbox

#### Order Summary (Sidebar)

- Cart items liste
- Discount code input
- Subtotal
- Shipping cost
- VAT (25%) - fjernes ved valid VAT nummer
- Total
- Secure checkout badge

---

### Project Management

#### Projects Page

- **Layout**: 2-kolonne (projekter | valgt projekt detaljer)
- **Funktioner**:
  - Liste af projekter
  - Vælg aktivt projekt
  - Se projekt indhold
  - Tilføj/fjern items
  - Quantity controls
  - Totalpris per projekt
  - Overfør til cart

#### Project Item

- Item navn og pris
- Quantity +/- controls
- Remove knap
- Line total

---

### Auth Komponenter

#### Login Form

- Username input
- Password input
- Login knap
- "Sign up here" link

#### Sign Up Form

- First/Last name
- Email
- Phone
- Password
- Confirm password
- Create Account knap
- "Log in here" link

---

### UI Komponenter

#### Button

- Props: href, className, children
- Variants: Primary (lime), Outline, Ghost
- Hover effects

#### Accordion

- Expand/collapse animation
- Multiple sections
- FAQ style

#### Input Field

- Label (optional)
- Placeholder
- Focus ring styling
- Error state

#### Select Field

- Label
- Options array
- Focus styling

#### Radio Group

- Grid layout
- Icon support
- Selected state

---

## 🗄 State Management

### Zustand Stores

#### Calendar Store

```javascript
{
  bookingPeriod: { start: null, end: null },
  setBookingPeriod: (start, end) => {},
  clearBookingPeriod: () => {},
  isValidBooking: (date) => boolean
}
```

- **Persist**: localStorage (key: "calendar-storage")

#### Cart Store

```javascript
{
  cartStatus: null | 'empty' | 'checkedOut' | 'abandoned',
  setEmptyCart: () => {},
  setCheckedOut: () => {},
  setAbandoned: () => {},
  resetCartStatus: () => {}
}
```

- **Persist**: localStorage (key: "cart-storage")

### Foreslåede Nye Stores

#### Cart Items Store

```javascript
{
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  updateQuantity: (id, quantity) => {},
  clearCart: () => {},
  getTotal: () => number,
  getItemCount: () => number
}
```

#### User Store

```javascript
{
  user: null,
  isAuthenticated: false,
  login: (credentials) => {},
  logout: () => {},
  register: (data) => {}
}
```

#### Projects Store

```javascript
{
  projects: {},
  activeProject: null,
  createProject: (name) => {},
  deleteProject: (name) => {},
  addItemToProject: (projectName, item) => {},
  removeItemFromProject: (projectName, itemId) => {},
  setActiveProject: (name) => {},
  transferToCart: (projectName) => {}
}
```

#### Filter Store

```javascript
{
  categories: [],
  priceRange: { min: null, max: null },
  inStock: false,
  sortBy: 'name',
  setCategories: (categories) => {},
  setPriceRange: (min, max) => {},
  toggleInStock: () => {},
  setSortBy: (sort) => {},
  resetFilters: () => {}
}
```

---

## 🔄 Brugerflows

### 1. Browse & Book Flow

```
Forside → Produkter → Filter → Enkelt Produkt → Vælg datoer → Tilføj til kurv → Checkout → Bekræftelse
```

### 2. Kit Booking Flow

```
Forside → Popular Kits → Kit Side → Se indhold → Tilføj til kurv → Checkout → Bekræftelse
```

### 3. Project Planning Flow

```
Login → Projects → Opret projekt → Browse produkter → Tilføj til projekt → Review projekt → Overfør til kurv → Checkout
```

### 4. User Registration Flow

```
Sign Up → Udfyld formular → Opret konto → Login → Dashboard
```

### 5. Search Flow

```
Klik search → Indtast søgeterm → Se resultater → Vælg produkt
```

---

## 📅 Implementeringsrækkefølge

### Fase 1: Foundation (Uge 1-2)

- [ ] Projekt setup (Next.js 16, Tailwind v4)
- [ ] Design system implementation (farver, typografi)
- [ ] Layout komponenter (Navigation, Footer)
- [ ] Base UI komponenter (Button, Input, etc.)
- [ ] Zustand stores setup

### Fase 2: Core Pages (Uge 3-4)

- [ ] Forside med alle sektioner
- [ ] Produkt liste side med filter
- [ ] Enkelt produkt side
- [ ] Kit sider

### Fase 3: User Features (Uge 5-6)

- [ ] Login/Sign Up
- [ ] User dashboard
- [ ] Cart funktionalitet
- [ ] Projects system

### Fase 4: Checkout & Polish (Uge 7-8)

- [ ] Checkout flow
- [ ] Form validering
- [ ] Responsive optimering
- [ ] Performance optimering
- [ ] Tilgængelighed (a11y)

### Fase 5: Content & Legal (Uge 9)

- [ ] How It Works
- [ ] About Us
- [ ] Contact
- [ ] Terms & Conditions
- [ ] Privacy Policy
- [ ] Cookie Policy

### Fase 6: Testing & Launch (Uge 10)

- [ ] Cross-browser testing
- [ ] Mobile testing
- [ ] Performance audit
- [ ] SEO optimering
- [ ] Launch

---

## 📝 Noter

### Kategorier (Navigation)

1. Kits
2. Camera & Accessories
3. Audio
4. Lighting, SFX & Stands
5. Live Production
6. Monitors & Recorders
7. Grips & Gadgets
8. Cables & Adapters
9. Production & Consumables

### Valuta

- DKK (Danish Krone)
- Priser vises excl. VAT
- VAT: 25%

### Sprog

- English (primary)
- Danish
- Spanish

### Lokation

- Adresse: Jernholmen 2, 2650 Hvidovre
- 11 min fra CPH Airport

---

## 🔗 Links til Ressourcer

- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [Next.js 16 Docs](https://nextjs.org/docs)
- [Zustand Docs](https://zustand-demo.pmnd.rs/)
- [Lucide Icons](https://lucide.dev/)

---

_Sidst opdateret: Januar 2026_
