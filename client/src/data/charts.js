
import { faChartBar, faLevelUpAlt, faRefresh } from '@fortawesome/free-solid-svg-icons';

const Inflows = [
    { id: 1, label: "AUM", value: 70, color: "tertiary", icon: faChartBar },
    { id: 2, label: "New Inflows", value: 20, color: "secondary", icon: faLevelUpAlt },
    { id: 3, label: "Excisting Inflows", value: 10, color: "primary", icon: faRefresh }
];

const totalAum = [
    { id: 1, label: "Zone", value: [1, 5,4], color: "primary" },
    { id: 2, label: "Branch", value: [2, 3, 4], color: "secondary" },
    { id: 3, label: "General", value: [2, 3, 4], color: "secondary" }
];

export {
    Inflows,
    totalAum
};