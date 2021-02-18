using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Data.Entity;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace HarmadikHet_I9D6EJ
{
    public partial class Form3 : Form
    {
        StudiesEntities context = new StudiesEntities();
        public Form3()
        {
            InitializeComponent();
            context.Lessons.Load();
            context.Courses.Load();
            context.Instructors.Load();
            context.Days.Load();
            context.Times.Load();
            context.Rooms.Load();
            lessonBindingSource.DataSource = context.Lessons.Local;
            courseBindingSource.DataSource = context.Courses.Local;
            instructorBindingSource.DataSource = context.Instructors.Local;
            dayBindingSource.DataSource = context.Days.Local;
            timeBindingSource.DataSource = context.Times.Local;
            roomBindingSource.DataSource = context.Rooms.Local;
        }

        private void toolStripButton1_Click(object sender, EventArgs e)
        {
            context.SaveChanges();
        }
    }
}
