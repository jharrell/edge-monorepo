export default function Page({ params }: { params: { countryCode: string } }) {
    return (
        <main>
            <div>
                <h1>Wow, you&apos;re from {params.countryCode}? Neat!</h1>
            </div>
        </main>
    );
}