# Technical Notes

## Repository & Project Information

### Project Details
- **Project ID**: 33dfa664-435d-4f22-99ce-48b7b40afdff
- **Platform**: Lovable (lovable.dev)
- **Git Integration**: Available via Lovable's GitHub integration
- **Version Control**: Built-in version history (Google Docs-style) + optional GitHub sync

### Repository Structure
```
├── public/              # Static assets served as-is
├── src/
│   ├── assets/         # Images and media files
│   ├── components/     # Reusable React components
│   │   ├── ui/        # shadcn/ui components
│   │   └── ...        # Custom components (Navigation, Footer, etc.)
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utility functions
│   ├── pages/         # Route components
│   ├── index.css      # Global styles & design tokens
│   └── main.tsx       # Application entry point
├── vite.config.ts     # Vite configuration
├── tailwind.config.ts # Tailwind CSS configuration
└── tsconfig.json      # TypeScript configuration
```

## Technology Stack

### Core Framework
- **React**: 18.3.1 - UI library
- **TypeScript**: 5.8.3 - Type safety and developer experience
- **Vite**: 5.4.19 - Build tool and dev server
  - Port: 8080
  - Host: :: (IPv6, accepts all connections)
  - HMR enabled for instant updates

### Routing
- **React Router DOM**: 6.30.1
  - Client-side routing
  - Route components in `src/pages/`
  - ScrollToTop component for navigation UX

### Styling & UI
- **Tailwind CSS**: 3.4.1 - Utility-first CSS framework
- **shadcn/ui**: Component library built on Radix UI
- **Radix UI**: Headless accessible components
- **class-variance-authority**: 0.7.1 - Component variants
- **tailwind-merge**: 2.6.0 - Merge Tailwind classes
- **tailwindcss-animate**: 1.0.7 - Animation utilities
- **next-themes**: 0.3.0 - Dark mode support

### State Management & Data Fetching
- **TanStack React Query**: 5.83.0 - Server state management
- **React Hook Form**: 7.61.1 - Form state management
- **Zod**: 3.25.76 - Schema validation

### UI Libraries
- **Lucide React**: 0.462.0 - Icon library
- **Recharts**: 2.15.4 - Chart components
- **Sonner**: 1.7.4 - Toast notifications
- **date-fns**: 3.6.0 - Date utilities

## Build Configuration

### Vite Configuration (`vite.config.ts`)
```typescript
{
  server: {
    host: "::",      // IPv6, listens on all interfaces
    port: 8080,      // Development server port
  },
  plugins: [
    react(),         // React SWC plugin for fast refresh
    componentTagger() // Lovable's component tagging (dev only)
  ],
  resolve: {
    alias: {
      "@": "./src"   // Import alias for cleaner imports
    }
  }
}
```

### Build Process
1. **Development**: `npm run dev` or `vite`
   - Hot Module Replacement (HMR)
   - Fast refresh for React components
   - Source maps enabled
   - Component tagging for Lovable integration

2. **Production Build**: `npm run build`
   - TypeScript compilation check
   - Vite production build
   - Asset optimization
   - Code splitting
   - Tree shaking

3. **Preview**: `npm run preview`
   - Test production build locally

### TypeScript Configuration
- **Target**: ES2020
- **Module**: ESNext
- **JSX**: react-jsx
- **Strict Mode**: Enabled
- **Path Alias**: @ → ./src

## Hosting & Deployment

### Current Hosting
- **Platform**: Lovable Cloud Platform
- **Staging Domain**: `*.lovable.app` subdomain
- **Custom Domain**: Available with paid plans
- **SSL/TLS**: Automatic HTTPS

### Deployment Process
1. **Frontend Changes**:
   - Automatic preview builds on code changes
   - Manual publish via "Update" button in publish dialog
   - Changes visible on staging URL

2. **Backend Changes** (if Lovable Cloud enabled):
   - Edge functions deploy automatically
   - Database migrations apply immediately
   - No manual intervention required

### Deployment Configuration
- **Build Command**: `npm run build`
- **Output Directory**: `dist/`
- **Node Version**: Latest stable
- **Environment Variables**: Managed via Lovable secrets

### Custom Domain Setup
1. Navigate to Project → Settings → Domains
2. Add custom domain or subdomain
3. Configure DNS records as instructed
4. SSL certificate provisioned automatically
5. **Note**: Requires paid Lovable plan

## Form Behavior Analysis

### Contact Form (`src/pages/Contact.tsx`)

#### Current Implementation
- **State Management**: React `useState` hooks
- **Validation**: Client-side only
- **Submission**: No backend integration (currently mock)
- **Feedback**: Toast notifications (Sonner)

#### Form Fields
```typescript
{
  name: string,           // Required, trimmed
  email: string,          // Required, email format
  organization: string,   // Optional
  role: string,          // Optional
  service: string,        // Optional, from predefined list
  message: string         // Required, 10-5000 chars
}
```

#### Validation Rules (Current)
- **Name**: 
  - Required: Yes
  - Trim whitespace
  - Error: "Nimi on pakollinen"

- **Email**:
  - Required: Yes
  - Format: Regex `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
  - Trim whitespace
  - Error: "Anna kelvollinen sähköpostiosoite"

- **Message**:
  - Required: Yes
  - Min length: 10 characters
  - Max length: 5000 characters
  - Error: "Viesti on oltava 10-5000 merkkiä pitkä"

#### Current Flow
1. User fills form
2. Client-side validation on submit
3. If valid:
   - Success toast shown
   - Form resets
   - **Note**: Data not persisted/sent anywhere
4. If invalid:
   - Error toast with specific message

#### Limitations
- ❌ No backend integration
- ❌ No data persistence
- ❌ No email sending
- ❌ No server-side validation
- ❌ Basic client-side validation (can be bypassed)
- ❌ No spam protection
- ❌ No rate limiting

## Recommendations for Backend Integration

### Option 1: Lovable Cloud (Recommended)

#### Why Lovable Cloud?
- Zero external account setup
- Integrated with project
- Automatic provisioning
- Built on Supabase (enterprise-grade)
- Usage-based pricing with free tier

#### Implementation Steps

1. **Enable Lovable Cloud**
   - Click Cloud tab in Lovable interface
   - Enable integration
   - Database, auth, storage auto-provisioned

2. **Create Contact Submissions Table**
   ```sql
   CREATE TABLE contact_submissions (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     name TEXT NOT NULL,
     email TEXT NOT NULL,
     organization TEXT,
     role TEXT,
     service TEXT,
     message TEXT NOT NULL,
     created_at TIMESTAMPTZ DEFAULT NOW(),
     ip_address TEXT,
     user_agent TEXT,
     status TEXT DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'resolved'))
   );
   
   -- Enable Row Level Security
   ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
   
   -- Policy: Anyone can insert (public form)
   CREATE POLICY "Allow public insert" ON contact_submissions
     FOR INSERT TO anon
     WITH CHECK (true);
   
   -- Policy: Only admins can read
   CREATE POLICY "Admin read access" ON contact_submissions
     FOR SELECT TO authenticated
     USING (auth.jwt() ->> 'role' = 'admin');
   ```

3. **Update Form to Use Database**
   ```typescript
   import { supabase } from '@/integrations/supabase/client';
   
   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     
     // Validate with zod
     const result = contactSchema.safeParse(formData);
     if (!result.success) {
       toast.error(result.error.errors[0].message);
       return;
     }
     
     // Insert to database
     const { error } = await supabase
       .from('contact_submissions')
       .insert([{
         name: result.data.name,
         email: result.data.email,
         organization: result.data.organization,
         role: result.data.role,
         service: result.data.service,
         message: result.data.message
       }]);
     
     if (error) {
       toast.error("Lähetys epäonnistui. Yritä uudelleen.");
       console.error(error);
       return;
     }
     
     toast.success("Viesti lähetetty!");
     resetForm();
   };
   ```

4. **Create Edge Function for Email Notifications**
   ```typescript
   // supabase/functions/send-contact-email/index.ts
   import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
   
   const corsHeaders = {
     'Access-Control-Allow-Origin': '*',
     'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
   };
   
   serve(async (req) => {
     if (req.method === 'OPTIONS') {
       return new Response(null, { headers: corsHeaders });
     }
   
     const { name, email, message } = await req.json();
     
     // Send email using Resend, SendGrid, or SMTP
     // Implementation depends on chosen email service
     
     return new Response(
       JSON.stringify({ success: true }),
       { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
     );
   });
   ```

5. **Add Schema Validation with Zod**
   ```typescript
   import { z } from 'zod';
   
   const contactSchema = z.object({
     name: z.string()
       .trim()
       .min(1, "Nimi on pakollinen")
       .max(100, "Nimi on liian pitkä"),
     email: z.string()
       .trim()
       .email("Anna kelvollinen sähköpostiosoite")
       .max(255, "Sähköposti on liian pitkä"),
     organization: z.string().max(200).optional(),
     role: z.string().max(100).optional(),
     service: z.string().max(100).optional(),
     message: z.string()
       .trim()
       .min(10, "Viesti on liian lyhyt (min 10 merkkiä)")
       .max(5000, "Viesti on liian pitkä (max 5000 merkkiä)")
   });
   ```

#### Additional Features to Consider

- **Spam Protection**:
  - Add reCAPTCHA or hCaptcha
  - Rate limiting via Edge Functions
  - Honeypot fields

- **Admin Dashboard**:
  - View submissions in Lovable Cloud UI
  - Or build custom admin page with filtering/search
  - Status management (new/in_progress/resolved)

- **Email Notifications**:
  - Notify admin on new submission
  - Auto-reply to user confirming receipt
  - Use Resend, SendGrid, or AWS SES

- **Analytics**:
  - Track form conversion rate
  - Submission sources
  - Common inquiries

### Option 2: External Services

#### Formspree / Formspark
- **Pros**: No backend code needed, simple integration
- **Cons**: Less control, recurring costs, data on third-party

#### Custom Backend API
- **Pros**: Full control
- **Cons**: Separate hosting, more complex deployment
- **Services**: Vercel Functions, AWS Lambda, Railway

## Security Considerations

### Current Status
- ✅ HTTPS enforced
- ✅ React escapes output by default
- ⚠️ No CSRF protection (not needed for stateless)
- ❌ No rate limiting
- ❌ No input sanitization beyond trim
- ❌ Client-side validation only

### Recommendations
1. **Input Validation**:
   - Use Zod for schema validation
   - Server-side validation (Edge Functions)
   - Sanitize inputs before storage

2. **Rate Limiting**:
   - Implement in Edge Functions
   - Track by IP address
   - Example: Max 5 submissions per hour per IP

3. **Spam Prevention**:
   - Add CAPTCHA for public forms
   - Honeypot fields
   - Email verification for responses

4. **Data Protection**:
   - Don't log sensitive data
   - Implement data retention policies
   - GDPR compliance if targeting EU users
   - Encrypt sensitive fields

5. **XSS Prevention**:
   - React handles this by default
   - Never use `dangerouslySetInnerHTML` with user input
   - Validate/sanitize rich text if added

## Performance Optimization

### Current Setup
- ✅ Vite with code splitting
- ✅ Tree shaking enabled
- ✅ React lazy loading available
- ✅ Fast Refresh (HMR)

### Recommendations
1. **Image Optimization**:
   - Convert to WebP format
   - Implement lazy loading
   - Use responsive images with srcset
   - Consider CDN for assets

2. **Code Splitting**:
   - Lazy load routes with React.lazy()
   - Split large components
   - Dynamic imports for heavy libraries

3. **Caching Strategy**:
   - Configure cache headers
   - Use React Query for API caching
   - Service Worker for offline support

4. **Bundle Analysis**:
   - Use `vite-bundle-visualizer`
   - Identify large dependencies
   - Consider lighter alternatives

## Monitoring & Analytics

### Available Options
1. **Lovable Analytics**:
   - Built-in for production apps
   - View in project analytics

2. **External Analytics**:
   - Google Analytics 4
   - Plausible (privacy-focused)
   - Fathom Analytics

3. **Error Tracking**:
   - Sentry
   - LogRocket
   - Rollbar

4. **Performance Monitoring**:
   - Web Vitals
   - Lighthouse CI
   - Vercel Analytics (if migrating)

## Environment Variables

### Management
- **Development**: Managed by Lovable
- **Production**: Set via Lovable Secrets
- **Edge Functions**: Access via `Deno.env.get()`

### Common Variables Needed
```bash
# If using Lovable Cloud
VITE_SUPABASE_URL=auto-populated
VITE_SUPABASE_ANON_KEY=auto-populated

# Email service (for contact form)
RESEND_API_KEY=secret
SENDGRID_API_KEY=secret

# reCAPTCHA
VITE_RECAPTCHA_SITE_KEY=public
RECAPTCHA_SECRET_KEY=secret

# Analytics
VITE_GA_MEASUREMENT_ID=public
```

## Testing Strategy

### Current Testing
- ❌ No test suite configured

### Recommended Setup
1. **Unit Testing**:
   - Vitest (Vite-native)
   - React Testing Library
   - Test utilities, hooks, and functions

2. **Component Testing**:
   - Storybook for component library
   - Visual regression testing

3. **E2E Testing**:
   - Playwright or Cypress
   - Test critical user flows
   - Contact form submission flow

4. **Type Safety**:
   - Already using TypeScript
   - Strict mode enabled
   - Consider additional lint rules

## Backup & Recovery

### Version Control
- **Lovable Built-in**: Automatic version history
- **GitHub**: Optional, recommended for team projects
- **Frequency**: Every change saved

### Database Backup (if using Lovable Cloud)
- **Automatic**: Daily backups by Supabase
- **Manual**: Export via Cloud UI
- **Point-in-time Recovery**: Available on paid tiers

### Disaster Recovery Plan
1. Project code backed up automatically
2. Database can be exported as SQL
3. Assets stored in version control
4. Secrets can be documented (securely)
5. Re-deploy process documented

## Migration Paths

### Moving to Custom Hosting
1. Connect GitHub integration
2. Clone repository
3. Configure environment variables
4. Deploy to:
   - Vercel (recommended for Vite/React)
   - Netlify
   - Cloudflare Pages
   - AWS Amplify

### Maintaining Backend
- If using Lovable Cloud: Supabase projects are portable
- Can self-host Supabase if needed
- Edge Functions can be migrated to Supabase CLI

## Documentation & Resources

### Internal Documentation
- `/public/design-notes.md` - Design system reference
- `/public/technical-notes.md` - This document
- `/public/site-content.md` - Content structure

### External Resources
- [Lovable Docs](https://docs.lovable.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/)
- [shadcn/ui Docs](https://ui.shadcn.com/)

---

**Last Updated**: 2025-11-11  
**Version**: 1.0  
**Maintainer**: Project Team
