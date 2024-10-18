import Button from '@components/button';

interface Props {
    onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
    searchTerm: string;
}

const Filters: React.FC<Props> = ({ onSearch, searchTerm }) => {
    return (
        <>
            <Button name="Archive" />
            <input
                placeholder="search"
                className="px-4 py-2 rounded-md border-2 text-sm"
                value={searchTerm}
                onChange={onSearch}
            />
            <Button name="Filters" />
            <Button name="+ Event" primary />
        </>
    );
};

export default Filters;