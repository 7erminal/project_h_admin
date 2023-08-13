import './bootstrap';
import '../css/app.css';

import './components/hosts_table';
import './components/requests_graph';
import './components/response_messages';
import './components/summary_slabs';
import './components/register_form';
import './components/login';
import './components/logout';
import './components/customers_acquisition_graph';
import './components/customersOverview';
import './components/requestsChart';
import './components/requests_overview';
import './components/customers_chart';
import './components/services_overview_slabs';
import './components/services_hosted_chart';
import './components/services_requested_chart';
import './components/services_table';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});
