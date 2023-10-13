using Microsoft.EntityFrameworkCore;
using backend.Data;

// https://www.twilio.com/blog/containerize-your-sql-server-with-docker-and-aspnet-core-with-ef-core

var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins, policy  => {
        policy.AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddDbContext<TimestampsContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("TimestampsDb")));

var app = builder.Build();

using(var scope = app.Services.CreateScope())
{
    var timestampsContext = scope.ServiceProvider.GetRequiredService<TimestampsContext>();
    timestampsContext.Database.EnsureCreated();
    // timestampsContext.Seed();
}

// Configure the HTTP request pipeline.

app.UseCors(MyAllowSpecificOrigins);

app.UseAuthorization();

app.MapControllers();

app.Run();
