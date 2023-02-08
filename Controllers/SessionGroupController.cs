using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using my_new_app.Models;

namespace my_new_app.Controllers;

[ApiController]
[Route("[controller]")]
public class SessionGroupController: ControllerBase
{
    TrainingContext db;
    public SessionGroupController()
    {
        db = new TrainingContext();
    }

    [HttpGet]
    public IEnumerable<SessionGroup> Get()
    {
        return db.SessionGroups;
    }
}
