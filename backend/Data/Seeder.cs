using AutoFixture;

namespace backend.Data
{
    public static class Seeder
    {
        // This is purely for a demo, don't anything like this in a real application!
        public static void Seed(this TimestampsContext timestampsContext)
        {
            if (!timestampsContext.Timestamps.Any())
            {
                Fixture fixture = new Fixture();
                fixture.Customize<Timestamp>(timestamp => timestamp.Without(t => t.TimestampId));
                //--- The next two lines add 10 rows to your database
                List<Timestamp> timestamps = fixture.CreateMany<Timestamp>(10).ToList();
                timestampsContext.AddRange(timestamps);
                timestampsContext.SaveChanges();
           }
        }
    }
}