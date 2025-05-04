export default function ContactPage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center p-8">
            <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
            <p className="mb-4 text-lg">You can reach me securely using my ProtonMail PGP public key:</p>
            <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto max-w-full">
{`-----BEGIN PGP PUBLIC KEY BLOCK-----

xjMEYmMXwxYJKwYBBAHaRw8BAQdAx3YiQ+39gFMfcDn7unt6fHpzbbvv/Zyu
zsc5ehPaRKnNL3RvYW5sZTFAcHJvdG9ubWFpbC5jb20gPHRvYW5sZTFAcHJv
dG9ubWFpbC5jb20+wo8EEBYKACAFAmJjF8MGCwkHCAMCBBUICgIEFgIBAAIZ
AQIbAwIeAQAhCRB/9ALPuA49qxYhBBhk8xTowCpGZexAU3/0As+4Dj2rlOMB
ANoP9kKViT71A95krsb6hCV29iGMVdlMq/hFhSJ0BMOEAQD1yNn5CSp+ZrDx
CXF/FUsCoVheKydlF55042e0spNuCs44BGJjF8MSCisGAQQBl1UBBQEBB0DP
LUl0rAAlYEGRKjpHxzn2FxW+Po+mdPBB7AGe5UZWdgMBCAfCeAQYFggACQUC
YmMXwwIbDAAhCRB/9ALPuA49qxYhBBhk8xTowCpGZexAU3/0As+4Dj2ryL4B
AMgqWNHqjA6fHpq0gV+FX18GVmrxNqsCQ42UiprcSQRkAP458E+2FSSIT+ZP
Y9IJpSYvKd1jC4zYPtbB0Vh3y6OSCw==
=m7iG
-----END PGP PUBLIC KEY BLOCK-----`}
      </pre>
        </main>
    );
}
