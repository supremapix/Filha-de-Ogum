import React from 'react';
import { EnhancedSEO } from './EnhancedSEO';
interface SEOProps { title: string; description: string; canonical: string; locationName?: string; }
export const SEO: React.FC<SEOProps> = props => <EnhancedSEO {...props} />;
