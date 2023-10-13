using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using backend.Data;

namespace backend.Controllers;

[ApiController]
[Route("api/timestamps")]
public class TimestampsController : ControllerBase
{
    private readonly TimestampsContext _timestampsContext;

    public TimestampsController (TimestampsContext timestampsContext)
    {
        _timestampsContext = timestampsContext;
    }

    [HttpGet]
    public ActionResult GetTimestamps()
    {
        return Ok(_timestampsContext.Timestamps.OrderBy(t => t.TimestampId));
    }

    [HttpGet("{id:int}")]
    public ActionResult GetTimestamp(int id)
    {
        Console.WriteLine("GetTimestamp");
        Console.WriteLine("{0}", id);

        var timestamp = _timestampsContext.Timestamps.FirstOrDefault(t => t.TimestampId == id);
        if (timestamp == null)
        {
            return BadRequest();
        }

        return Ok(timestamp);
    }

    [HttpPost]
    public IActionResult PostTimestamp(Timestamp timestamp)
    {
        if (timestamp == null)
        {
            return BadRequest();
        }

        _timestampsContext.Timestamps.Add(timestamp);
        _timestampsContext.SaveChanges();
        return Ok(_timestampsContext.Timestamps.OrderBy(t => t.TimestampId));
    }

    [HttpDelete]
    public IActionResult DeleteTimestamps()
    {
        _timestampsContext.Timestamps.RemoveRange(_timestampsContext.Timestamps);
        _timestampsContext.SaveChanges();
        return Ok(_timestampsContext.Timestamps.OrderBy(t => t.TimestampId));
    }

    [HttpDelete("{id:int}")]
    public IActionResult DeleteTimestamp(int id)
    {
        Console.WriteLine("DeleteTimestamp");
        Console.WriteLine("{0}", id);

        var timestamp = _timestampsContext.Timestamps.FirstOrDefault(t => t.TimestampId == id);
        if (timestamp != null)
        {
            _timestampsContext.Timestamps.Remove(timestamp);
            _timestampsContext.SaveChanges();
        }

        return Ok(_timestampsContext.Timestamps.OrderBy(t => t.TimestampId));
    }
}