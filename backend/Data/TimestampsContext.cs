using Microsoft.EntityFrameworkCore;

namespace backend.Data
{
    public class TimestampsContext : DbContext
    {
        public TimestampsContext(DbContextOptions<TimestampsContext> options) : base(options)
        {
        }

        public DbSet<Timestamp>? Timestamps { get; set; }
    }
}