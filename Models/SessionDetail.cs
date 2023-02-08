using System;
using System.Collections.Generic;

namespace my_new_app.Models;

public partial class SessionDetail
{
    public int SessionId { get; set; }

    public int SessionTypeId { get; set; }

    public int? SessionGroupId { get; set; }

    public string SessionName { get; set; } = null!;

    public int? ParticipantCount { get; set; }

    public decimal SessionLengthHours { get; set; }

    public DateTime SessionDate { get; set; }

    public decimal Npsscore { get; set; }

    public decimal? Credit { get; set; }
}
