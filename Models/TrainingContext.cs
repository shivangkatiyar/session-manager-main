using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace my_new_app.Models;

public partial class TrainingContext : DbContext
{
    public TrainingContext()
    {
    }

    public TrainingContext(DbContextOptions<TrainingContext> options)
        : base(options)
    {
    }

    public virtual DbSet<MentorDetail> MentorDetails { get; set; }

    public virtual DbSet<SessionDetail> SessionDetails { get; set; }

    public virtual DbSet<SessionGroup> SessionGroups { get; set; }

    public virtual DbSet<SessionType> SessionTypes { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Data Source=MAQ02047\\SQLEXPRESS;Initial Catalog=Training;encrypt=false;Integrated Security=True");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<MentorDetail>(entity =>
        {
            entity.HasNoKey();

            entity.Property(e => e.EmpCode)
                .HasMaxLength(10)
                .IsUnicode(false);
            entity.Property(e => e.EmpResDashGuid).HasColumnType("decimal(32, 0)");
        });

        modelBuilder.Entity<SessionDetail>(entity =>
        {
            entity.HasNoKey();

            entity.Property(e => e.Credit).HasColumnType("decimal(28, 10)");
            entity.Property(e => e.Npsscore)
                .HasColumnType("decimal(28, 10)")
                .HasColumnName("NPSScore");
            entity.Property(e => e.SessionDate).HasDefaultValueSql("(getdate())");
            entity.Property(e => e.SessionId).ValueGeneratedOnAdd();
            entity.Property(e => e.SessionLengthHours)
                .HasColumnType("decimal(28, 10)")
                .HasColumnName("SessionLength_hours");
            entity.Property(e => e.SessionName)
                .HasMaxLength(255)
                .IsUnicode(false);
        });

        modelBuilder.Entity<SessionGroup>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("SessionGroup");

            entity.Property(e => e.SessionGroupName)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<SessionType>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("SessionType");

            entity.Property(e => e.SessionTypeName).HasMaxLength(50);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
