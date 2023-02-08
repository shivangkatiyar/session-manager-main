using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using my_new_app.Models;

namespace my_new_app.Controllers;

[ApiController]
[Route("[controller]")]
public class SessionTypeController: ControllerBase
{
    TrainingContext db;
    public SessionTypeController()
    {
        db = new TrainingContext();
    }

    [HttpGet]
    public IEnumerable<SessionType> Get()
    {
        return db.SessionTypes;
    }
}
