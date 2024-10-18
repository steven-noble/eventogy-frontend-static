interface TabsProps {
    onTabChange: (event: React.MouseEvent<HTMLButtonElement>) => void;
    currentTab: string;
}

const Tabs: React.FC<TabsProps> = ({ onTabChange, currentTab }) => {
    return (
        <ul className="flex px-4 border-b font-bold text-sm text-[#575f69]">
            <li>
                <button
                    className={`p-4 ${currentTab === 'events' ? 'border-b-2 border-[#1a73e8]' : ''}`}
                    name="events"
                    onClick={onTabChange}
                >
                    Events
                </button>
            </li>
            <li>
                <button
                    className={`p-4 ${currentTab === 'templates' ? 'border-b-2 border-[#1a73e8]' : ''}`}
                    name="templates"
                    onClick={onTabChange}
                >
                    Templates
                </button>
            </li>
        </ul>
    );
};

export default Tabs;
