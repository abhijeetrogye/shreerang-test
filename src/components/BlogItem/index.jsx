import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "Grace of Silk Sarees",
    description:
      "Silk sarees are loved for weddings and big occasions. Their shine, rich colors, and smooth feel make them the pride of every woman’s wardrobe.",
    image: "https://i.ibb.co/jzB4LJw/silk-saree.jpg",
    slug: "grace-of-silk-sarees",
    date: "2025-01-12",
    author: "Shreerang Team",
    readTime: "4 min",
  },
  {
    id: 2,
    title: "Charm of Cotton Sarees",
    description:
      "Cotton sarees are soft, light, and perfect for daily use. They keep you cool, look simple yet classy, and are loved by women of all ages.",
    image: "https://i.ibb.co/9HcdmLq/cotton-saree.jpg",
    slug: "charm-of-cotton-sarees",
    date: "2025-01-08",
    author: "Shreerang Team",
    readTime: "3 min",
  },
  {
    id: 3,
    title: "Pride of Maharashtrian Sarees",
    description:
      "Nauvari sarees of Maharashtra are famous for their unique drape and royal look. They are worn in weddings, festivals, and traditional events with great pride.",
    image: "https://i.ibb.co/d0SvrRG/designer-saree.jpg",
    slug: "pride-of-maharashtrian-sarees",
    date: "2025-01-03",
    author: "Shreerang Team",
    readTime: "5 min",
  },
];

const clampStyle = {
  display: "-webkit-box",
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
};

const BlogItem = () => {
  return (
    <section>
      <div className="container">
        {/* Section Heading */}
        <div className="mb-5">
          <h2 className="text-[25px] font-semibold">
            Saree Stories
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            Blogs about our rich saree tradition.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="group relative overflow-hidden rounded-2xl border border-neutral-200/70 bg-white/70 backdrop-blur-sm shadow-[0_6px_24px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(0,0,0,0.12)]"
            >
              {/* Image Header */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://placehold.co/800x450/111/FFF?text=Saree+Blog";
                  }}
                />
                {/* Soft gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent pointer-events-none" />

                {/* Floating pill */}
                <span className="absolute top-3 left-3 text-xs text-white bg-white/15 backdrop-blur-md border border-white/25 shadow px-3 py-1 rounded-full">
                  Sarees
                </span>

                {/* Title on image */}
                <h3 className="absolute bottom-3 left-4 right-4 text-white text-lg font-semibold drop-shadow-md line-clamp-2">
                  {blog.title}
                </h3>
              </div>

              {/* Body */}
              <div className="p-5">
                {/* Meta */}
                <div className="mb-3 flex items-center gap-3 text-xs text-neutral-500">
                  <time dateTime={blog.date}>
                    {new Date(blog.date).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    })}
                  </time>
                  <span aria-hidden>•</span>
                  <span>{blog.author}</span>
                  <span className="ml-auto">{blog.readTime}</span>
                </div>

                {/* Title again for SEO */}
                <h3 className="text-neutral-900 text-lg font-semibold mb-2">
                  {blog.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-neutral-700 mb-5" style={clampStyle}>
                  {blog.description}
                </p>

                {/* Read more */}
                <div className="flex items-center justify-between">
                  <Link
                    to={`/blog/${blog.slug}`}
                    className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white
                               bg-gradient-to-r from-[#8e182f] to-purple-600
                               shadow-md hover:shadow-lg transition-all duration-300
                               hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#8e182f]/40"
                  >
                    Read more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>

                  {/* Subtle “view all” on hover */}
                  <span className="text-xs text-neutral-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Explore more →
                  </span>
                </div>
              </div>

              {/* Hover outline */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/5 group-hover:ring-black/10" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogItem;
