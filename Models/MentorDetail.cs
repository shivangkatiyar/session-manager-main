using System;
using System.Collections.Generic;

namespace my_new_app.Models;

public partial class MentorDetail
{
    public decimal EmpResDashGuid { get; set; }

    public string EmpCode { get; set; } = null!;

    public int SessionId { get; set; }
}
