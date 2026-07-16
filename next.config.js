/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "upload.wikimedia.org",
      "european-wordpress-prod.s3.amazonaws.com",
      "www.worldometers.info",
      "journals.institutoeuropean.com",
      "res.cloudinary.com",
    ],
  },
  async redirects() {
    return [
      {
        source: "/instituto",
        destination: "/",
        permanent: true,
      },
      {
        source: "/forum/:slug",
        destination: "/eventos/direito-penal-economico/porto-2026/participantes/:slug",
        permanent: true,
      },
      {
        source: "/participantes",
        destination: "/eventos/direito-penal-economico/porto-2026",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
