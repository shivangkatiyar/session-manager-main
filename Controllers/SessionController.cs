using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using my_new_app.Models;

namespace my_new_app.Controllers;

[ApiController]
[Route("[controller]")]
public class SessionController: ControllerBase
{
    TrainingContext db;
    public SessionController()
    {
        db = new TrainingContext();
    }

    [HttpGet()] 
    public IEnumerable<SessionDetail> Get()
    {
        return db.SessionDetails;
    }
    
    [HttpGet("{id}")]
    public SessionDetail Get(int id)
    {
        return db.SessionDetails.Where(s => s.SessionId == id).FirstOrDefault(new SessionDetail());
    }
}
