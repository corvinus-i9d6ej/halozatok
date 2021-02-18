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
    public partial class Form2 : Form
    {
        StudiesEntities context = new StudiesEntities();
        public Form2()
        {
            InitializeComponent();
            context.Instructors.Load();
            context.Status.Load();
            context.Employements.Load();
            instructorBindingSource.DataSource = context.Instructors.Local;
            statusBindingSource.DataSource = context.Status.Local;
            employementBindingSource.DataSource = context.Employements.Local;
        }

        private void toolStripButton1_Click(object sender, EventArgs e)
        {
            context.SaveChanges();
        }
    }
}
