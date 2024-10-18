module.exports = () => {
    const env = {
        UNSPLASH_API_KEY: process.env.UNSPLASH_API_KEY,
    }

    return {
        env,
        images: {
          domains: ['images.unsplash.com'],
        },
    }
}
