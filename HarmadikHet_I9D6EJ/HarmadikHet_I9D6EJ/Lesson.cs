//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace HarmadikHet_I9D6EJ
{
    using System;
    using System.Collections.Generic;
    
    public partial class Lesson
    {
        public int LessonSK { get; set; }
        public Nullable<int> CourseFK { get; set; }
        public Nullable<int> InstructorFK { get; set; }
        public Nullable<byte> DayFK { get; set; }
        public Nullable<byte> TimeFK { get; set; }
        public Nullable<int> RoomFK { get; set; }
    
        public virtual Course Course { get; set; }
        public virtual Day Day { get; set; }
        public virtual Instructor Instructor { get; set; }
        public virtual Room Room { get; set; }
        public virtual Time Time { get; set; }
    }
}
