# Frontend Implementation Plan - Simple Hello World App

## Overview

Extremely simple React 19 hello world application with a hazard button that throws an uncaught error to crash the UI.

## Technology Stack

- React 19
- Vite
- TypeScript
- Tailwind CSS v4
- Shadcn/ui components

## Pages & Components

### 1. Main Page (App.tsx)

**Purpose**: Single page displaying hello world message and hazard button

**Components Needed**:

- `HelloWorldSection` - Main content area with greeting
- `HazardButton` - Dangerous button component that throws error

**Features**:

- Display "Hello World" message prominently
- Render hazard button with warning styling
- No error boundaries to allow UI crash

**Styling**:

- Center content on screen
- Use Tailwind v4 classes for layout
- Red/warning colors for hazard button

### 2. Components

#### HelloWorldSection Component

**File**: `src/components/HelloWorldSection.tsx`

- Simple text display component
- Centered layout
- Large, readable typography

#### HazardButton Component

**File**: `src/components/HazardButton.tsx`

- Uses shadcn Button component as base
- Red/destructive variant styling
- onClick handler that throws "Hello World" error
- Warning icon from lucide-react

**Functionality**:

```typescript
const handleClick = () => {
    throw new Error('Hello World');
};
```

### 3. Styling Updates

#### Base Styles

**Files to modify**:

- `src/styles/index.css` - Keep existing Tailwind imports
- Apply minimal styling for center layout

### 4. Type Definitions

**File**: `src/types/app.ts`

- Simple interface for component props if needed

## Implementation Phases

### Phase 1: Core Structure

1. Update `App.tsx` with basic layout
2. Create `HelloWorldSection` component
3. Add basic styling for center layout

### Phase 2: Hazard Button

1. Create `HazardButton` component
2. Implement error throwing functionality
3. Style with warning/danger theme

### Phase 3: Integration & Testing

1. Integrate components in main App
2. Test hazard button crashes UI as expected
3. Verify hello world display

## Files to Create/Modify

### New Files:

- `src/components/HelloWorldSection.tsx`
- `src/components/HazardButton.tsx`
- `src/types/app.ts` (if needed)

### Modified Files:

- `src/App.tsx` - Main application component
- `src/styles/index.css` - Minor styling adjustments

## Notes

- No error boundaries to ensure UI crashes on error
- No complex state management needed
- No API calls required
- Minimal component structure for simplicity
- Leverage existing shadcn/ui Button component
- Use existing Tailwind v4 setup
