

export default function Page({ params }: { params: { work: string[] } }) {
    return <div>My Post: {params.work[1]}</div>
};

