# orBIT 👁️‍🗨️
> **"If the logic fails, the BIT crashes the universe. Said by no one :)"**

## 📜 Project Overview

**orBIT** is a Full-Stack **Entropy Management System** (IT Support Portal) designed to centralize the chaos of technical operations. (A Support Ticketing System just like Jira, ServiceNow, BMC Helix/Remedy, Freshservice, Zendesk and more!)

In a digital universe defined by entropy, data does not simply flow, it FLOODS. **orBIT** serves as the **Boolean Gatekeeper** (True or False logic), standing between the System Administrator's logic (**or**) and the relentless stream of user errors and raw data (**BIT**).

This system enforces strict order through **Object-Oriented Logic** and **Typed Contracts**, ensuring that no hardware goes missing and no critical failure goes unnoticed.

## 🔮 The Architecture (Tech Stack)

The artifact was forged using a strict **MERN Stack** with **TypeScript**, chosen to enforce the rigid laws of the system.

| Layer | Technology | The Purpose (Why we use it) |
| :--- | :--- | :--- |
| **The Interface** | **React + TypeScript** | To create a strict, crash-resistant visual manifestation. TypeScript acts as the "Contract" between user and server. |
| **The Style** | **Tailwind CSS** | For rapid, uniform styling without the chaos of custom CSS files. |
| **The Logic** | **Node.js + Express** | The server runtime that enforces the Gatekeeper protocols. |
| **The Paradigm** | **OOP (Object Oriented)** | We do not use loose functions. We use **Classes** and **Polymorphism** to mirror the hierarchy of real-world assets. |
| **The Records** | **MongoDB (Mongoose)** | The Hall of Records. Flexible JSON storage with Schemas to enforce structure. |

---

## ⚡ The Laws of the System (Business Logic)

**orBIT** is not a passive tool. It actively enforces the following business rules to maintain the "Balance."

### 1. The Ticketing Protocol (Workflow Logic)
A ticket is a containment vessel for problems encountered by users. It must follow a strict lifecycle:
* **The Path:** `Open` → `In Progress` → `Resolved` → `Closed`.
* **The Law of Resolution:** A ticket cannot jump from `Open` to `Closed` without a resolution note.
* **The SLA Warning (Service Level Agreement):** If a **CRITICAL** ticket remains unresolved for more than **4 Hours**, the system visually flags it (turning red/warning icon), signaling an impending breach of the logic gate.

### 2. The Artifact Hierarchy (OOP Asset Management)
I will utilize **Polymorphism** to manage the organization's arsenal.
* **Base Class:** `Asset` (Properties: `id`, `serialNumber`, `status`).
* **Child Classes:**
    * `Laptop` (Extends Asset + `cpu`, `ram`, `runDiagnostics()`).
    * `NetworkDevice` (Extends Asset + `ipAddress`, `portCount`, `pingDevice()`).
* **The Law of Assignment:** An asset cannot be assigned to a `User` if its status is **"Broken"** or **"Retired."**
* **The Law of History:** Every time an asset changes hands, the event is permanently inscribed in the history array.

---

## 🗺️ The Roadmap (Development Phases)

This project is being constructed in specific phases to ensure structural integrity.

### Phase 1: The Foundation
* **Goal:** Establish the Node.js server with TypeScript configuration (`tsconfig.json`).
* **Deliverable:** A typed environment capable of running the backend logic.

### Phase 2: The OOP Core
* **Goal:** Construct the backend Class Hierarchy (`Asset` Parent and `Laptop` Child).
* **Focus:** Implementing `extends`, `super()`, and method overriding before connecting the database.

### Phase 3: The API & The Hall of Records
* **Goal:** Connect to MongoDB and implement Controller Classes (e.g., `TicketController`).
* **Logic:** Enforce the rule that prevents broken laptops from being assigned via API routes.

### Phase 4: The Visual Manifestation (Frontend)
* **Goal:** Initialize React with Vite and TypeScript.
* **Key Feature:** Reusable `<Card />` components that strictly obey the TypeScript Interfaces defined in the backend.

### Phase 5: The "IT Support" Polish
* **Goal:** Implement the visual SLA warnings (Red flags for >4hr tickets) and Dashboard analytics.

---

## 🕯️ Installation (The Summoning)

To summon **orBIT** into your local environment:

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/your-username/orBIT.git](https://github.com/your-username/orBIT.git)
    cd orBIT
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Awaken the Gatekeeper:**
    ```bash
    npm run dev
    ```

## ⚠️ Warning

**Do not delete the `or` logic.**
If you remove the decision-making capabilities of this software, the **BIT** will become sentient, and your server room may implode into a singularity.

---

*"We serve the Logic. The Logic protects the User."* — **The orBIT Doctrine (Just call me Pert)**
