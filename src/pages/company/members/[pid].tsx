import { useRouter } from 'next/router';
import Button from '@/components/button';

const Member = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Member: {id}</h1>
      <Button></Button>
    </div>
  );
};

export default Member;
