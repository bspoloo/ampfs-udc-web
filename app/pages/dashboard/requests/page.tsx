import RequestsHeader from '@/app/components/requests/requests-header';
import RequestsList from '@/app/components/requests/request-list';

export default function Requests() {
    return (
        <div>
            <RequestsHeader />
            <RequestsList />
        </div>
    );
}